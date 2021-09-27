import React from 'react';
import Titles from './components/Titles.js'
import Subtitles from './components/Subtitles.js'
import Text from './components/Text.js'
import Project_invest from './components/Project_invest.js';




function App() {
  return (
    <div className="App">

    <div className="Title-container">
        <Titles title="10 terraced houses in Höör in Sweden"/>
        <Subtitles/>  
      </div>
    
      <div className="text-container">
      <Text/> 
      </div>

      <div className='container-bottom'>

        <div className='image'>
          
          <img data-sizes="auto" data-srcset="https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_256/v1627478542/bn7munouexhqcfemakcf.pdf 256w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_512/v1627478542/bn7munouexhqcfemakcf.pdf 512w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_768/v1627478542/bn7munouexhqcfemakcf.pdf 768w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_1024/v1627478542/bn7munouexhqcfemakcf.pdf 1024w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_1280/v1627478542/bn7munouexhqcfemakcf.pdf 1280w" src="https://res.cloudinary.com/fundbricks/image/upload/v1627478542/bn7munouexhqcfemakcf.pdf" srcset="https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_256/v1627478542/bn7munouexhqcfemakcf.pdf 256w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_512/v1627478542/bn7munouexhqcfemakcf.pdf 512w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_768/v1627478542/bn7munouexhqcfemakcf.pdf 768w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_1024/v1627478542/bn7munouexhqcfemakcf.pdf 1024w,https://res.cloudinary.com/fundbricks/image/upload/f_auto,q_70,ar_16:9,c_fill,g_auto:subject,w_1280/v1627478542/bn7munouexhqcfemakcf.pdf 1280w" alt="project image" class="lazyautosizes ls-is-cached lazyloaded" sizes="760px"></img>
        <div className='completed'>
            <span>Fuldtegnet</span>
          </div>
        </div>
    
        <div className='info-container'>
        <Project_invest/>  
        </div>

      </div>
    </div>
  );
}

export default App;
