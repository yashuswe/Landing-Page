import Image from 'next/image';
import styles from './carousel.module.scss';
import { ImageCardProps } from './types';



const ImageCard: React.FC<ImageCardProps> = ({ src, text1, text2, text3 }) => {
    return (
        <div className={styles.card}>
            <Image
                src={src}
                alt="Image description"
                layout="fill"
                objectFit="cover"
                className={styles.image}
            />
            <div className={styles.textContainerImage}>
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
            </div>
        </div>
    );
};

export default ImageCard;

