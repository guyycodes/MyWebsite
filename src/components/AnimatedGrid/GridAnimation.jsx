import React, { useState, useEffect } from 'react';
import { Box, Grid, Image, Heading, Text, AspectRatio,Link } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';


// Initial sets of images to be displayed.
const imagePaths = [
  'https://imgur.com/DhGXAAL.png',
  'https://u-static.fotor.com/images/text-to-image/result/PRO-358ff55bf0fc465a9af173c5bdd12a0c.jpg',
  'https://u-static.fotor.com/images/text-to-image/result/PRO-350b302546574d218fc1a06cc522c1b9.jpg',
  'https://u-static.fotor.com/images/text-to-image/result/PRO-3ee79be2455e4cf1be0a15f59e691152.jpg',
  'https://u-static.fotor.com/images/text-to-image/result/PRO-5ae2771c3e734061b1dd1bbd232ee87d.jpg',
  'https://u-static.fotor.com/images/text-to-image/result/PRO-b684fa1c35d648049a5524d3ac49aaba.jpg',
  'https://u-static.fotor.com/images/text-to-image/result/PRO-e391363b9f7d432eb75f43b24347fa38.jpg',
  'https://u-static.fotor.com/images/text-to-image/result/PRO-7b2397146ccc4850a15fa847c67a30ef.jpg',
  'https://u-static.fotor.com/images/text-to-image/result/PRO-b3385e2ac3474ebc98a02a3a981bc10d.jpg'
];
// Additional or newer images that could be included in the animated rotation.
const newImagePaths = [
    'https://u-static.fotor.com/images/text-to-image/result/PRO-82b9314642b24ff188d0f8c9c7d249d4.jpg', 
    'https://u-static.fotor.com/images/text-to-image/result/PRO-6646bc9decfa4c1faedebb41ff5f570d.jpg', 
    'https://u-static.fotor.com/images/text-to-image/result/PRO-23cd69e194334461a5c1d3344d21b2b8.jpg', 
    'https://u-static.fotor.com/images/text-to-image/result/PRO-65a0993640f445fdb03373efb149e388.jpg', 
    'https://u-static.fotor.com/images/text-to-image/result/PRO-80d6860d1b4d4d37a22f706bb66b6e8e.jpg', 
    'https://u-static.fotor.com/images/text-to-image/result/PRO-bfbb21d01ff241909c3c771131a77d2d.jpg',
];
// displays the work portfolio.
export const AnimationGrid = ( { data } ) => {

  const [gridComponents, setGridComponents] = useState(data?data:"")

    // `currentSet` holds the currently displayed images, each with a unique `key`.
  const [currentSet, setCurrentSet] = useState(
    imagePaths.map((path, index) => ({ path, key: `image-${index}` }))
  );
  // `animateSet` keeps track of which images are currently being animated out.
  const [animateSet, setAnimateSet] = useState(new Set());

  // `newImages` will store the new images that will replace the ones that are being faded out.
  const [newImages, setNewImages] = useState([]);

    // This effect runs on component mount. It sets up an interval to cycle images between old and new.
  useEffect(() => {
    // Defined a function to handle the fading out and in of images.
    const cycleAnimateSet = () => {
    // Combine the two sets of images to allow selecting from all available options.
      const allImages = [...newImagePaths, ...imagePaths]
    // Choose which images are going to fade out.
      const fadeOutIndexes = selectRandomIndexes(currentSet.length, 2);
    // Choose new images that will fade in.
      const fadeInImages = selectRandomImages(allImages, 9);

      if (fadeInImages.length > 0) {
        // Prepare to animate selected images out.
        setAnimateSet(fadeOutIndexes);
        // Store new images to be used when fading in.
        setNewImages(fadeInImages);
        // After a delay, replace the faded out images with new ones.
        setTimeout(() => {
          setCurrentSet((prevSet) => {
            const updatedSet = [...prevSet];
            fadeOutIndexes.forEach((index, i) => {
              updatedSet[index] = { path: fadeInImages[i], key: `image-${Date.now()}-${i}` };
            });
            return updatedSet;
          });
          // Clear the set to allow for new animations.
          setAnimateSet(new Set());
        }, 750); // This delay matches the fade-out animation
      }
    };
    // Start the initial animation cycle and set up an interval for continuous cycling.
    cycleAnimateSet();
    // Clear the interval.
    const interval = setInterval(cycleAnimateSet, 1750);
    return () => clearInterval(interval);
  }, []);
    // Select a given number of unique random indexes from the current set.
    function selectRandomIndexes(total, numToSelect) {
        let indexes = new Set();
        while (indexes.size < numToSelect) {
        let r = Math.floor(Math.random() * total);
        indexes.add(r);
        }
        return indexes;
    }
    // Choose a specified number of images from the available paths. This ensures no duplicates.
    function selectRandomImages(imagePaths, numToSelect) {
        // Filter out any invalid image paths first.
        const validImagePaths = imagePaths.filter((path) => path && path.trim() !== '');
        // Return an empty array if no valid images are found.
        if (validImagePaths.length === 0) {
            return [];
        }
        // Shuffle the array and select the required number of images.
        const shuffled = [...validImagePaths].sort(() => 0.5 - Math.random());
        const selectedImages = [];
        let i = 0;
        while (selectedImages.length < numToSelect && i < shuffled.length) {
            const path = shuffled[i];
            if (path && path.trim() !== '') {
            selectedImages.push(path);
        }
        i++;
        }
        return selectedImages;
    }
    // Render the Box container
  return (
    <Box id="work" pb={{base:28,md:44}} px={1} mb={4}>
      <Heading as="h3" textAlign="center" mb={0} color={'black'}>
       Portfolio
      </Heading>
      <Text fontSize="md" textAlign="center" mb={4} color={'black'}>
        Welcome to a handpicked collection of my work. My work includes Full Stack Applications for businesses, 
        Cross Platform Mobile Applications, Progessive Web Apps, API's, Microservices, Database Replication, 
        Custom Algorithms, Kubernetes, Machine Learning, Cybersecurity, 
        Networking Systems level programming and a variety of tech stacks and frameworks. 
        You can navigate with the tab above, and even search with autocomplete through my work. 
      <br /><br />(Hover for a larger view)
      </Text>
      <Grid transform="scale(1.5)" templateColumns="repeat(3, 1fr)" gap={4} pt={28}>
      {currentSet.map(({ path, key, link }, index) => (
        <AnimatePresence key={key}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 2.05, zIndex: '5' }}
            onClick={(event) => {
              const clickedImage = event.currentTarget;
          
              // Scale up the clicked image
              clickedImage.style.scale = '2.05';
              clickedImage.style.zIndex = '5';
          
              // Set a timer to scale down the clicked image after 1.5 seconds
              setTimeout(() => {
                clickedImage.style.scale = '1';
                clickedImage.style.zIndex = 'auto';
              }, 1500);
            }}
          >
            {/* Wrap AspectRatio in a link */}
            <Link href={link} isExternal> {/* Add isExternal prop if linking to an external site */}
              <AspectRatio ratio={1}>
                <Image
                  src={path}
                  alt={`Work image ${index}`}
                  objectFit="cover"
                  borderRadius="md"
                  boxSize="100%"
                />
              </AspectRatio>
            </Link>
          </motion.div>
        </AnimatePresence>
      ))}
    </Grid>
    </Box>
  );
};