const Link = ({ href, id, title }) => {
  return (
    <a href={href} id={id} class="link">
      {title}
    </a>
  );
};

export default Link;
