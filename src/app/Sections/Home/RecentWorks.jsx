import { cormorantFont, montserratFont, mulishFont } from "@/app/fonts/fonts";

export default function RecentWorks() {
  const images = [
    { id: '01', title: 'Eddy Weds Genoveva', src: 'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159546/young-couple-holding-each-other-s-hand-giving-pose-while-kissing-beach_xueglw.jpg' },
    { id: '02', title: 'Braddy Weds Nerissa', src: 'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159327/full-shot-man-carrying-his-girlfriend_dhgpuh.jpg' },
    { id: '03', title: 'Minh Weds Anamaria', src: 'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159217/couple-summer-concept-rocks-by-sea_zeocmk.jpg' },
    { id: '04', title: 'Eddy Weds Genoveva', src: 'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159107/medium-shot-happy-romantic-couple_oocjq4.jpg' },
    { id: '05', title: 'Braddy Weds Nerissa', src: 'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159546/young-couple-holding-each-other-s-hand-giving-pose-while-kissing-beach_xueglw.jpg' },
    { id: '06', title: 'Minh Weds Anamaria', src: 'https://res.cloudinary.com/dsjtmv0m8/image/upload/v1733159327/full-shot-man-carrying-his-girlfriend_dhgpuh.jpg' },
  ];


  return (
    <div className="recent-work-grid">
      <h1 className={`browse-title ${montserratFont}`}><i >Recent Works</i></h1>
      <div className="recent-work-grid">
        {images.map((image) => (
          <div key={image.id} className="card">
            <div className="imageWrapper">
              <img src={image.src} alt={image.title} className="recent-image" />
            </div>
            <div className="recent-work-Container">
              <span className={`recent-work-index ${mulishFont}`}><i>{image.id}</i></span>
              <p className={`caption ${mulishFont}`}>{image.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={`view-all-recent-works ${cormorantFont}`} role="button" tabIndex="0"
      // onClick={handleClick}
      >
        Explore More
      </div>
    </div>
  );
}



