import ImageCard from '../components/ImageCard';
import styles from "./carousel.module.scss";


const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <ImageCard
                src="/assets/1.png"
                text1="First line of text"
                text2="Second line of text"
                text3="Third line of text"
            />
             <ImageCard
                src="/assets/2.png"
                text1="First line of text"
                text2="Second line of text"
                text3="Third line of text"
            />
             <ImageCard
                src="/assets/3.png"
                text1="First line of text"
                text2="Second line of text"
                text3="Third line of text"
            />
        </div>
    );
};

export default Gallery;