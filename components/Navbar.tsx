'use client';
import { useState } from 'react';
import CitySelectorModal from './CitySelectorModal';

export default function Navbar({ cityName }: { cityName?: string }) {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="navbar-custom">
        <div className="container">
          <a href="#" className="logo" onClick={e => { e.preventDefault(); setModalOpen(true); }}>
            <h6><b className="color-white">Rest-vanna</b> <strong><b className="red">{cityName ? `${cityName}` : 'в ЛО'}</b></strong></h6>
          </a>
          <nav>
            <button className="nav-triger" onClick={() => setOpen(!open)} aria-label="Меню">☰</button>
            <ul className={open ? 'open' : ''}>
              <li><a href="#section_cena">Цена</a></li>
              <li><a href="#reviews">Отзывы</a></li>
              <li><a href="#section_video">Видео</a></li>
              <li><a href="#section_contact">Контакты</a></li>
              <li><a href="tel:+79045565556">+7 (904) 556-55-56</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <CitySelectorModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}