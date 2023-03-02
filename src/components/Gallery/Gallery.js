import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './Gallery.css'
let images=[];


const Allphotos = [
  {
    img: './assets/Gallery/Rooms/1.jpg',
  },
  {
    img: './assets/Gallery/Rooms/2.jpg',
  },
  {
    img: './assets/Gallery/Rooms/3.jpg',
  },
  {
    img: './assets/Gallery/Rooms/4.jpg',
  },
  {
    img: './assets/Gallery/Rooms/5.jpg',
  },
  {
    img: './assets/Gallery/Rooms/6.jpg',
  },
  {
    img: './assets/Gallery/Rooms/7.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/1.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/2.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/3.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/4.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/5.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/6.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/7.jpg',
  },
  {
    img: './assets/Gallery/PropertyPics/1.jpg',
  },
  {
    img: './assets/Gallery/PropertyPics/2.jpg',
  },
  {
    img: './assets/Gallery/PropertyPics/3.jpg',
  },
  {
    img: './assets/Gallery/PropertyPics/4.jpg',
  },
  {
    img: './assets/Gallery/PropertyPics/5.jpg',
  },
  {
    img: './assets/Gallery/PropertyPics/6.jpg',
  },
  {
    img: './assets/Gallery/PropertyPics/7.jpg',
  },
];
const Rooms = [
  {
    img: './assets/Gallery/Rooms/1.jpg',
  },
  {
    img: './assets/Gallery/Rooms/2.jpg',
  },
  {
    img: './assets/Gallery/Rooms/3.jpg',
  },
  {
    img: './assets/Gallery/Rooms/4.jpg',
  },
  {
    img: './assets/Gallery/Rooms/5.jpg',
  },
  {
    img: './assets/Gallery/Rooms/6.jpg',
  },
  {
    img: './assets/Gallery/Rooms/7.jpg',
  },
];
const Restaurant = [
  {
    img: './assets/Gallery/Restaurant/1.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/2.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/3.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/4.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/5.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/6.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/7.jpg',
  },
];
const Banquet = [
  {
    img: './assets/Gallery/Restaurant/1.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/2.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/3.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/4.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/5.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/6.jpg',
  },
  {
    img: './assets/Gallery/Restaurant/7.jpg',
  },
];
const PropertyPics = [
  {
    img: './assets/Gallery/PropertyPics/1.jpg',
  },
  {
    img: './assets/Gallery/PropertyPics/2.jpg',
  },
  {
    img: './assets/Gallery/PropertyPics/3.jpg',
  },
  {
    img: './assets/Gallery/PropertyPics/4.jpg',
  },
  {
    img: './assets/Gallery/PropertyPics/5.jpg',
  },
  {
    img: './assets/Gallery/PropertyPics/6.jpg',
  },
  {
    img: './assets/Gallery/PropertyPics/7.jpg',
  },
];

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }`,
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
    <div className="container">
    <ImageList
    className='responsive'
      style={{
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
        overflow:'hidden',
      }}
      rowHeight={window.width/3}
      gap={1}
    >
      {images.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img,400, 1000, rows, cols)}
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
