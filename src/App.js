const App = () => {
  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick} >Camisa</button>
      <hr />
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};

export default App;