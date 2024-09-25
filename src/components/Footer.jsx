let year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer text-white text-center py-2">
      <p className="fs-5 pt-2 fw-bold">Made With &#128151; By Omar Magdy</p>
      <p>©copyright {year}</p>
    </footer>
  );
}
export default Footer;
