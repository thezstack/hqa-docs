import Link from 'next/link'

export default function Desktop(){
  return(
    <div className="cont nav bg">



      <ul>
        <li><a>Explore</a>
          <ul>
            <li><a href="/docs/about-us/why_hqa">Why HQA?</a></li>
            <li><a href="/docs/about-us/mission_values">Mission & Values</a></li>
            <li><a href="/docs/about-us/leadership_staff">Leadership</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Admissions</a>


        </li>
        <li>
          <a href="#">Academics</a>
          <ul>
            <li><a href="/docs/academics/montessori">Montessori</a></li>
            <li><a href="/docs/academics/elementary">Elementary</a></li>
            <li><a href="/docs/academics/middle">Middle</a></li>
            <li><a href="/docs/academics/high">High</a></li>
            <li><a href="/docs/academics/extracurricular">Clubs</a></li>
          </ul>
        </li>
        <li><a href="#">Islamic Studies</a>
          <ul>
            <li><a href="/docs/islamic-studies/quran">Quran</a></li>
            <li><a href="/docs/islamic-studies/arabic">Arabic</a></li>
          </ul>
        </li>
        <li><a href="#">Parents</a>
          <ul>
            <li><a href="/docs/parents/supply-list">Supply List</a></li>
            <li><a href="/docs/parents/uniforms">Uniform Policy</a></li>
            <li><a href="/docs/parents/usefullinks">Useful Links</a></li>

          </ul>
        </li>
        <li><a href="/docs/donations">Give</a></li>
      </ul>





    <style jsx>{`
      .cont{
        position:relative;
        margin-top:0px;
        padding: 20px;
        display:flex;
        align-items:center;
       justify-content:space-evenly;


      }

       .bg{
         background-color: rgba(255,255,255, .8);
       }
        /* common */
        .nav ul {
        	position: relative;
        	margin: 0;
        	padding: 0;
        	list-style: none;
        }
        .nav ul::after {
        	display: block;
        	clear: both;

        }
        .nav ul li {
        	position: relative;
        	float: left;

        }
        .nav ul li:not(:first-child) {
        	border-left: none;
        }
        .nav ul li:hover {
          background-color: rgba(255,255,255,.5);

        }
        .nav ul li a {
        	display: inline-block;
        	padding: 1em 4em;
        	color: #27408b;

        	text-align: center;
        	text-decoration: none;
        	white-space: nowrap;
        }
        .nav ul ul {
        	position: absolute;
        	top: 100%;
        	left: -2px;
        }
        .nav ul ul li {
        	float: none;
        	margin: 0;
        }
        .nav ul ul li:not(:first-child) {

        	border-top: none;
        }
        .nav ul ul ul {
        	position: absolute;
        	top: -2px;
        	left: 100%;
        }

       .nav ul ul {
      	visibility: hidden;
      	opacity: 0;
      	transition: .2s ease-in-out;
      }
      .nav ul li:hover > ul {
      	visibility: visible;
      	opacity: 1;
        background-color: rgba(255,255,255, .95);

      }


      `}</style>
    </div>

  )
}
