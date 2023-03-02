import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: './assets/Gallery/Rooms/1.jpg',
    rows: 1,
    cols: 2,
  },
  {
    img: './assets/Gallery/Rooms/2.jpg',
    rows: 1,
    cols: 2,
  },
  {
    img: './assets/Gallery/Rooms/3.jpg',
    rows: 1,
    cols: 2,
  },
  {
    img: './assets/Gallery/Rooms/4.jpg',
    rows: 1,
    cols: 2,
  },
  {
    img: './assets/Gallery/Rooms/5.jpg',
    rows: 1,
    cols: 2,
  },
  {
    img: './assets/Gallery/Rooms/6.jpg',
    rows: 1,
    cols: 2,
  },
  {
    img: './assets/Gallery/Rooms/7.jpg',
    rows: 1,
    cols: 2,
  },
  
];