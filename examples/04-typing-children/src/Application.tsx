/**
 * Things you could try:
 *
 * JSX.Element;
 * JSX.Element | JSX.Element[];
 * React.ReactNode;
 * React.ReactChildren;
 * React.ReactChild[];
 */

import { CSSProperties, ReactNode } from "react";

 type BoxProps = { children: ReactNode , style?: CSSProperties };

 const Box = ({ children , style={} }: BoxProps) => {
   return (
     <section style={{ padding: "1em", border: "5px solid purple", ...style }}>
       {children}
     </section>
   );
 };

 export default function Application() {
   return (
     <Box>
       Just a string.
       <p>Some HTML that is not nested.</p>
       <Box style={{color: "red"}} >
         <h2>Another React component with one child.</h2>
       </Box>
       <Box>
         <h2>A nested React component with two children.</h2>
         <p>The second child.</p>
       </Box>
     </Box>
   );
 }
