import Image from 'next/image';
import Link from 'next/link';
import { tarrgetFont } from '../font/font';

export default function Navigation() {
    return (
        <nav className={`${tarrgetFont.className} navbar navbar-expand-lg bg-body-tertiar sticky-top`}>
        <div className="container">
                    <Link className="navbar-brand" href="/">
                      <Image
                        src='/img/logo.png'
                        width={100}
                        height={100}
                        alt="logo"
                      />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/events">Events</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Members</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Friends</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }