import { Aside, Overlay, Item } from "./sidebar.styled";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <Aside $open={open} onClick={(e) => e.stopPropagation()}>
        <Item to="/" end onClick={onClose}>Home</Item>
        <Item to="/anime" onClick={onClose}>Anime</Item>
        <Item to="/manga" onClick={onClose}>Manga</Item>
        <Item to="/about" onClick={onClose}>About Us</Item>
        <Item to="/favorites" onClick={onClose}>Favorites</Item>
      </Aside>

      <Overlay $open={open} onClick={onClose} />
    </>
  );
}