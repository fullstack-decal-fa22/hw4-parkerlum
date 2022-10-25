import React from 'react';
import Color from './Color';
import { useState } from 'react';
import Block from './Block';
/* Add any imports you think you might need here! */

const Menu = () => {


    function renderColor(color) {
      
      return <Color color={color} onClick={() => handleClick(color)}></Color> 
    }

    function handleClick(color) {
   
      const postCopy = post.slice();
      const stylesObj = {
        backgroundColor: color
      }
      postCopy.unshift(<Block color={color} stylesObj={stylesObj}></Block>)
      
      setPost(postCopy);
    }


    const [post, setPost] = useState([])

    return (
      <div> 
        <div className="colorOptions">
          {renderColor("red")}
          {renderColor("pink")}
          {renderColor("blue")}
          {renderColor("green")}
        </div>
        <div>
          <p>{post}</p>
          
        </div>
      </div>


    );
}

export default Menu;