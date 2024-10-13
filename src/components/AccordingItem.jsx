import { BsDashCircleFill, BsFillPlusCircleFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function AccordionItem({
  num,
  title,
  curOpen,
  onOpen,
  children,
}) {
  const isOpen = num === curOpen;

  function handleToggle() {
    // setIsOpen((isOpen) => !isOpen);
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={` border-b boxShadow-md text-[#54595F] ${
        isOpen ? "" : ""
      } transition-all duration-500 ease-in-out mb-5`}
      onClick={handleToggle}
    >
      <div className="flex items-center justify-between px-5 py-3 cursor-pointer">
        <span className="text-sm leading-[1.5] font-bold">{title}</span>
        <span className="text-sm font-medium">
          {isOpen ? (
            <RiArrowDropDownLine color="#6C6C70" />
          ) : (
            <RiArrowDropDownLine color="#6C6C70" />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="px-5 pt-4 pb-5 text-sm leading-relaxed border-t">
          {children}
        </div>
      )}
    </div>
  );
}
