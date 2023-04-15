import { useRef, ReactNode } from "react"

const Dom: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const ref = useRef(null);
  // useEffect(() => {
  //   useStore.setState({ dom: ref })
  // }, [])

  return (
    <div
      className="dom"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        overflow: "hidden",
      }}
      ref={ref}
    >
      {children}
    </div>
  )
}

export default Dom
