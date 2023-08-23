/**
 * <div id="parent">
 *     <div id="child">
 *       <h1>hello world</h1>
 *       <h2>wlcome react corse</h2>
 *  </div>
 * <div id="child2">
 *       <h1>hello world</h1>
 *       <h2>wlcome react corse</h2>
 *  </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 */
       const heading=React.createElement("div",{id:"parent"},[
       React.createElement("div" ,{id:"child"},[
       React.createElement("h1",{},"hello world"),
       React.createElement("h2",{},"wlcome to react")]),
       React.createElement("div" ,{id:"child2"},[
        React.createElement("h1",{},"hello world"),
        React.createElement("h2",{},"wlcome to react")])
       
       ]);

/**const heading =React.createElement("h1",{id:"heading"},"welcom to react course ");*/
   console.log(heading);
          const root1=ReactDOM.createRoot(document.getElementById("root"))
          root1.render(heading);