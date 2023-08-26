const Spinner = () => {
  return (
    <div className="animate-spin">
      <img
        src={`${import.meta.env.BASE_URL}/pokeball.svg`}
        alt="loading pokeball"
        className="w-36 h-36"
      />
    </div>
  );
};

export default Spinner;
