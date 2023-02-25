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
      {!(width > MAX_WIDTH) && <h1 className="logo">VSE</h1>}
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

      {width > MAX_WIDTH && (
        <div className="col">
          <div className="info-wrap">
            <Info />
            <Contact />
          </div>
        </div>
      )}

      {/* mobile view */}
      {!(width > MAX_WIDTH) && (
        <div className="col mobile-view " style={{ paddingTop: "" }}>
          <div>
            <div>
              <div className="fixed">
                <Info />
              </div>
              <div
                style={{ background: "white", paddingTop: "400px", zIndex: 3 }}
              >
                {list?.map((img, i) => (
                  <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
