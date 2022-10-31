import data from "../../constants/data";
import Link from "../Link/Link";
const LinkSection = () => {
  return (
    <div>
      {data?.map(($link, index) => {
        return (
          <Link
            href={$link.uri}
            id={$link.id}
            linkTitle={$link.linkTitle}
            key={index}
            title={$link.title}
          />
        );
      })}
    </div>
  );
};

export default LinkSection;
