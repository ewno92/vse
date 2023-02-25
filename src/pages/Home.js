import Info from "../component/Info";
import { first, second } from "../component/img";
import HomeGallery from "../component/HomeGallery";
import {
  formatNumber,
  divideImageList,
  useWindowDimensions,
} from "../component/utils";
import Contact from "../component/Contact";
const MAX_WIDTH = 1000;
const Home = () => {
  const { width } = useWindowDimensions();

  const list = [...first, ...second];

  return (
    <div id="home">
      {width > MAX_WIDTH && (
        <div className="col desktop-view">
          <div>
            {first?.map((img, i) => (
              <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
            ))}
          </div>
        </div>
      )}

      {width > MAX_WIDTH && (
        <div className="col desktop-view">
          <div>
            {second?.map((img, i) => (
              <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
            ))}
          </div>
        </div>
      )}

      <div className="col">
        <div className="info-wrap">
          <Info />
          <Contact />
        </div>
      </div>

      {/* mobile view */}
      {!(width > MAX_WIDTH) && (
        <div className="col mobile-view">
          <div style={{ paddingTop: "300px" }}>
            <div style={{ background: "white" }}>
              {list?.map((img, i) => (
                <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
