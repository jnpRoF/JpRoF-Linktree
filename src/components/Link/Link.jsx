import "./Link.css";

const Link = ({ href, id, linkTitle, title }) => {
  return (
    <div className="linkCont">
      <a href={href} id={id} className="link" title={title}>
        {linkTitle}
      </a>
    </div>
  );
};

export default Link;
