const Main = (props) => {
  const data = (
    <div>
      <div class='wrapper'>
        <header>
          <h1>paste text into the text area below</h1>
        </header>
        <aside>
          <h4>Memu</h4>
          <p>Place for future functionality addition</p>
        </aside>
        <main>
          <div class='container'>
            <textarea
              id='inputArea'
              name='test'
              rows='10'
              cols='100'
            ></textarea>
            <div>
              <button onclick='sortText()'>Do it</button>
              <button onclick='resetFields()'>Reset</button>
            </div>
            <div>
              <h2>Present</h2>
              <textarea
                id='presentArea'
                name='test'
                rows='10'
                cols='100'
              ></textarea>
              <h2>Past</h2>
              <textarea
                id='pastArea'
                name='test'
                rows='10'
                cols='100'
              ></textarea>
            </div>
          </div>
        </main>
        <footer>
          <h5>focus!</h5>
        </footer>
      </div>
    </div>
  );
  return data;
};
export default Main;
