import { useState } from "react";

import "./note.css";

import Logo from "../../assets/imgs/logo.png";
import Arquivo from "../../assets/imgs/Archive.png";
import Delete from "../../assets/imgs/Delete.png";
import Home from "../../assets/imgs/Home.png";
import Retangulo1 from "../../assets/imgs/Rectangle 44.png";
import Retangulo2 from "../../assets/imgs/Rectangle 45.png";
import Retangulo3 from "../../assets/imgs/Rectangle 46.png";
import Retangulo4 from "../../assets/imgs/Rectangle 47.png";
import Retangulo5 from "../../assets/imgs/Rectangle 48.png";
import Retangulo6 from "../../assets/imgs/Rectangle 49.png";
import Retangulo7 from "../../assets/imgs/Rectangle 50.png";
import Retangulo8 from "../../assets/imgs/Rectangle 51.png";
import Search from "../../assets/imgs/Search.png";
import Tag from "../../assets/imgs/Tag.png";
import TopbarItem from "../../assets/imgs/Topbar Item.png";
import TopbarItem2 from "../../assets/imgs/Topbar Item (1).png";

function Notes() {
  const [search, setSearch] = useState("");

  return (
    <>
      <aside className="left-sidebar">
        <div className="logo">
          <img className="logo-img" src={Logo} alt="Senai Notes Logo" />
        </div>

        <div className="section">
          <ul>
            <li className="nav-item active">
              <img className="nav-icon" src={Home} alt="All Notes" /> All Notes
            </li>
            <li className="nav-item">
              <img className="nav-icon" src={Arquivo} alt="Archived Notes" /> Archived Notes
            </li>
          </ul>
          <hr />
        </div>

        <div className="section">
          <h3>Tags</h3> {/* O CSS irá transformar em maiúsculas */}
          <ul>
            <li className="nav-item">
              <img className="nav-icon" src={Tag} alt="Cooking Tag" /> Cooking
            </li>
            <li className="nav-item">
              <img className="nav-icon" src={Tag} alt="Dev Tag" /> Dev
            </li>
            <li className="nav-item">
              <img className="nav-icon" src={Tag} alt="Fitness Tag" /> Fitness
            </li>
            <li className="nav-item">
              <img className="nav-icon" src={Tag} alt="Health Tag" /> Health
            </li>
            <li className="nav-item">
              <img className="nav-icon" src={Tag} alt="Personal Tag" /> Personal
            </li>
            <li className="nav-item">
              <img className="nav-icon" src={Tag} alt="React Tag" /> React
            </li>
            <li className="nav-item">
              <img className="nav-icon" src={Tag} alt="Recipes Tag" /> Recipes
            </li>
            <li className="nav-item">
              <img className="nav-icon" src={Tag} alt="Shopping Tag" /> Shopping
            </li>
            <li className="nav-item">
              <img className="nav-icon" src={Tag} alt="Travel Tag" /> Travel
            </li>
            <li className="nav-item">
              <img className="nav-icon" src={Tag} alt="TypeScript Tag" /> TypeScript
            </li>
          </ul>
        </div>
      </aside>

      <main className="main-content">
        <header className="main-header">
          <div className="header-title">
            <h1>All Notes</h1>
          </div>
          <div className="search-box">
            <img src={Search} alt="Search" className="search-icon" />
            <input
              type="text"
              placeholder="Search by title, content, or tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* Adicionado o botão "Create New Note" aqui, fora da notes-list, como na imagem */}
          <button className="create-note-btn">+ Create New Note</button>
          <div className="user-actions">
            <img src={TopbarItem2} alt="Settings" className="action-icon" />
            <img src={TopbarItem} alt="User Profile" className="action-icon" />
          </div>
        </header>

        <section className="content-area">
          <div className="notes-list">
            {/* O botão "Create New Note" estava aqui, mas nas imagens ele está no header principal */}
            {/* Se você quiser ele aqui também, pode duplicar, mas sugiro seguir a imagem principal */}

            <div className="note-preview active">
              <div className="note-item">
                <div className="note-img">
                  <img src={Retangulo2} alt="React Performance Optimization" />
                </div>
                <div className="note-info">
                  <strong>React Performance Optimization</strong>
                  <div className="tags-container">
                    <span className="tag">Dev</span>
                    <span className="tag">React</span>
                  </div>
                  <small>29 Oct 2024</small>
                </div>
              </div>
            </div>

            <hr />

            <div className="note-preview">
              <div className="note-item">
                <div className="note-img">
                  <img src={Retangulo3} alt="Japan Travel Planning" />
                </div>
                <div className="note-info">
                  <strong>Japan Travel Planning</strong>
                  <div className="tags-container">
                    <span className="tag">Travel</span>
                    <span className="tag">Personal</span>
                  </div>
                  <small>28 Oct 2024</small>
                </div>
              </div>
            </div>

            <hr />

            <div className="note-preview">
              <div className="note-item">
                <div className="note-img">
                  <img src={Retangulo4} alt="Favorite Pasta Recipes" />
                </div>
                <div className="note-info">
                  <strong>Favorite Pasta Recipes</strong>
                  <div className="tags-container">
                    <span className="tag">Cooking</span>
                    <span className="tag">Recipes</span>
                  </div>
                  <small>27 Oct 2024</small>
                </div>
              </div>
            </div>

            <hr />

            <div className="note-preview">
              <div className="note-item">
                <div className="note-img">
                  <img src={Retangulo5} alt="Weekly Workout Plan" />
                </div>
                <div className="note-info">
                  <strong>Weekly Workout Plan</strong>
                  <div className="tags-container">
                    <span className="tag">Dev</span>
                    <span className="tag">React</span>
                  </div>
                  <small>25 Oct 2024</small>
                </div>
              </div>
            </div>

            <hr />

            <div className="note-preview">
              <div className="note-item">
                <div className="note-img">
                  <img src={Retangulo6} alt="Meal Prep Ideas" />
                </div>
                <div className="note-info">
                  <strong>Meal Prep Ideas</strong>
                  <div className="tags-container">
                    <span className="tag">Cooking</span>
                    <span className="tag">Health</span>
                  </div>
                  <small>12 Oct 2024</small>
                </div>
              </div>
            </div>

            <hr />

            <div className="note-preview">
              <div className="note-item">
                <div className="note-img">
                  <img src={Retangulo7} alt="Reading List" />
                </div>
                <div className="note-info">
                  <strong>Reading List</strong>
                  <div className="tags-container">
                    <span className="tag">Personal</span>
                    <span className="tag">Dev</span>
                  </div>
                  <small>05 Oct 2024</small>
                </div>
              </div>
            </div>

            <hr />

            <div className="note-preview">
              <div className="note-item">
                <div className="note-img">
                  <img src={Retangulo8} alt="Fitness Goals 2025" />
                </div>
                <div className="note-info">
                  <strong>Fitness Goals 2025</strong>
                  <div className="tags-container">
                    <span className="tag">Fitness</span>
                    <span className="tag">Health</span>
                    <span className="tag">Personal</span>
                  </div>
                  <small>22 Sep 2024</small>
                </div>
              </div>
            </div>
          </div>

          {/* Remover esta <hr /> se a intenção for apenas separar o note-details do notes-list */}
          {/* A imagem mostra uma linha horizontal mais proeminente, o que geralmente é uma borda do elemento. */}
          {/* <hr /> */} 

          <div className="note-details">
            <div className="note-actions-top">
              <button className="action-button">
                <img src={Arquivo} alt="Archive Note" /> Archive Note
              </button>
              <button className="action-button delete-button">
                <img src={Delete} alt="Delete Note" /> Delete Note
              </button>
            </div>

            <img src={Retangulo1} alt="React Logo" className="note-details-image" />

            <h2>React Performance Optimization</h2>
            <div className="note-details-tags">Dev, React</div>
            <small>Last edited: 29 Oct 2024</small>

            <hr />

            <p>
              <strong>Key performance optimization techniques:</strong>
            </p>

            <ol className="optimization-list">
              <li>
                <strong>Code Splitting</strong>
                <br />
                - Use <code>React.lazy()</code> for route-based splitting
                <br />
                - Implement dynamic imports for heavy components
              </li>
              <li>
                <strong>Memoization</strong>
                <br />
                - <code>useMemo()</code> to memoize expensive calculations
                <br />
                - <code>useCallback()</code> for function props {/* Corrigido aqui para useCallback() */}
                <br />
                - <code>React.memo()</code> to prevent unnecessary re-renders {/* Adicionado conforme a imagem */}
              </li>
              <li>
                <strong>Virtual List Implementation</strong> {/* Corrigido de Virtualization para Virtual List Implementation */}
                <br />
                - Use <code>react-window</code> or <code>react-virtualized</code> for large lists {/* Ajustado bibliotecas */}
                <br />
                - Implement infinite scrolling {/* Adicionado conforme a imagem */}
              </li>
              {/* Adicionado o TODO conforme a imagem */}
              <li>
                TODO: Benchmark current application and identify bottlenecks
              </li>
            </ol>

            <div className="save-cancel-buttons">
              <button className="cancel-button">Cancel</button> {/* Alterado texto de Cancelar para Cancel */}
              <button className="save-button">Save Note</button> {/* Alterado texto de Salvar para Save Note */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Notes;