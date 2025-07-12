export default function CursorSVG({ svgRef }) {
    return (
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        className="scale-50 opacity-0"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6 19L19 6m0 0v12.48M19 6H6.52"
        />
      </svg>
    );
  }
