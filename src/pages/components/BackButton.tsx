function BackButton() {
  function goBack() {
    window.history.back();
  }

  return (
    <button
      type="button"
      className="back-button"
      onClick={goBack}
      aria-label="Voltar"
    >
      ←
    </button>
  );
}

export default BackButton;