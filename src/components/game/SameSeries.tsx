import SameSeriesDesktop from "./SameSeriesDesktop";
import SameSeriesSlider from "./SameSeriesSlider";

import { IGames } from "../../api";

const SameSeries: React.FC<{ data: IGames }> = ({ data }): JSX.Element => {
  const { width } = document.body.getBoundingClientRect();

  if ((data && data.results) && data.results.length > 0 && width >= 1024)
    return <SameSeriesDesktop data={data} />;

  return <SameSeriesSlider data={data} />;
};

export default SameSeries;
