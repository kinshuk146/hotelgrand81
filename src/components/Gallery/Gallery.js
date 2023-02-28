import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

let images=[];

const Allphotos = [
  {
    img: 'https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/81886401_115234766667956_9171355069457629184_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PndryPHQP0AAX_BXOFM&_nc_ht=scontent-bom1-1.xx&oh=00_AfBxtUc__9o7RU9iM-teRyYo9ZaO8rYV8_e_NQBgIc5GTA&oe=64213071',
    title: 'Room',
    author: '@bkristastucchio',
    featured: true,
  },
 
];
const Rooms = [
  
];
const Restaurant = [
  {
    img: 'https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/81886401_115234766667956_9171355069457629184_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PndryPHQP0AAX_BXOFM&_nc_ht=scontent-bom1-1.xx&oh=00_AfBxtUc__9o7RU9iM-teRyYo9ZaO8rYV8_e_NQBgIc5GTA&oe=64213071',
    title: 'Room',
    author: '@bkristastucchio',
    featured: true,
  },
];
const Banquet = [
  {
    img: 'https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/81886401_115234766667956_9171355069457629184_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PndryPHQP0AAX_BXOFM&_nc_ht=scontent-bom1-1.xx&oh=00_AfBxtUc__9o7RU9iM-teRyYo9ZaO8rYV8_e_NQBgIc5GTA&oe=64213071',
    title: 'Room',
    author: '@bkristastucchio',
    featured: true,
  }
];
const PropertyPics = [
  {
    img: 'https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-amarvilas-agra/experiences/detail/dine-under-the-stars.jpg',
    title: 'Room',
    author: '@bkristastucchio',
    featured: true,
  }
];

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList(props) {
  if(props.category==='All Photos')
  {
    images=Allphotos;
  }
  if(props.category==='Rooms')
  {
    images=Rooms;
  }
  if(props.category==='Restaurant')
  {
    images=Restaurant;
  }
  if(props.category==='Banquet')
  {
    images=Banquet;
  }
  if(props.category==='Property Pics')
  {
    images=PropertyPics;
  }

  return (
    <div className="container mt-4">
    <ImageList
      sx={{
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {images.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
    </div>
  );
}
