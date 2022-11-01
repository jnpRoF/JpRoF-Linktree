import data from "../../constants/data";
import Link from "../Link/Link";
const LinkSection = () => {
  return (
    <div style={{ border: "2px solid" }}>
      {data?.map(($link, index) => {
        return (
          <Link
            href={$link.uri}
            id={$link.id}
            title={$link.title}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default LinkSection;
