import data from "../../constants/data";
import Link from "../Link/Link";
const LinkSection = () => {
  return (
    <>
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
    </>
  );
};

export default LinkSection;
