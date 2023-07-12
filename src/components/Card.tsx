
function generateRandomColor(): string {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

function Card() {
  const arrays: string[] = [];
  for (let i = 0; i < 5; i++) {
    const randomColor = generateRandomColor();
    arrays.push(randomColor);
  }

  return (
    <div className="flex flex-row flex-wrap items-center w-full justify-center gap-20 px-8 my-4">
      {arrays.map((color, index) => (
        <div
          key={index}
          className="flex-col flex gap-6 my-4 w-fit p-3 rounded-2xl bg-slate-50 items-center hover:bg-opacity-50 cursor-pointer"
        >
          <div
            className="palette w-44 h-60 bg-gray-200 px-10 py-4 rounded-sm hover:bg-opacity-75"
            style={{ backgroundColor: color }}
          ></div>
          <div className="hex-value uppercase">{color}</div>
        </div>
      ))}
    </div>
  );
}

export default Card;

