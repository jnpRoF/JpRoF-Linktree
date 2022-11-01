import "./Link.css";

const Link = ({ href, id, title }) => {
  return (
    <div className="linkCont">
      <a href={href} id={id} class="link">
        {title}
      </a>
    </div>
  );
};

export default Link;
