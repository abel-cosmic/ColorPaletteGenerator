interface CustomButtonProps {
    text: string;
    padding: string;
}
const CustomButton: React.FC<CustomButtonProps> = ({ text, padding }) =>{
    return (
      <div
        style={{
          width: "fit-content",
          backgroundColor: "#088395",
          borderRadius: "0.3rem",
          color: "#ffffff",
          padding: padding,
          fontWeight: 700
        }}
        className="hover:opacity-75 active:opacity-100"
      >
    {text}
      </div>
    );
  }

  export default CustomButton;