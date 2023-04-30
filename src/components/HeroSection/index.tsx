import React, { useState, memo } from 'react';
import styles from './hero.module.scss';
import { useTheme } from '../../store/redux-helpers/helper';
import hanSolo from '../../assets/hanSolo.jpg';
import dartVader from '../../assets/dartVader.jpg';
import skywalker from '../../assets/skywalker.jpg';
import yoda from '../../assets/yoda.jpg';
import leia from '../../assets/leia.jpg';
import { GalleryItem } from '../../types/DataTypes';

const HeroSection: React.FC = memo(() => {
  const theme = useTheme();
  const [panelIndex, setPanelIndex] = useState<number | null>(null);

  const galleryData: GalleryItem[] = [
    {
      image: hanSolo,
      title: `${theme === 'dark' ? 'welcome' : 'may'}`,
      quote: '"Never tell me the odds!"',
    },
    {
      image: dartVader,
      title: `${theme === 'dark' ? 'to' : 'the'}`,
      quote: '"The Force is strong with this one."',
    },
    {
      image: skywalker,
      title: `${theme === 'dark' ? 'the' : 'force be'}`,
      quote: '"I am a Jedi, like my father before me."',
    },
    {
      image: yoda,
      title: `${theme === 'dark' ? 'dark' : 'with'}`,
      quote: '"Do. Or do not. There is no try."',
    },
    {
      image: leia,
      title: `${theme === 'dark' ? 'side' : 'you'}`,
      quote: '"Someone has to save our skins."',
    },
  ];

  const handleClick = (index: number) => {
    if (panelIndex === index) {
      setPanelIndex(null);
    } else {
      setPanelIndex(index);
    }
  };

  return (
    <section className={styles['panel-box']}>
      {galleryData.map((item: GalleryItem, index: number) => (
        <div
          onClick={() => {
            handleClick(index);
          }}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
          key={index}
          className={`${styles.panel} ${panelIndex === index && styles.open}`}
        >
          <p>{item.title.toUpperCase()}</p>
          <p>{item.quote}</p>
        </div>
      ))}
    </section>
  );
});

export default HeroSection;
