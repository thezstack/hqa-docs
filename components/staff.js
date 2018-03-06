import React, { Component } from 'react'

class Staff extends Component {
  render() {
    return (
      <div>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="profile-card text-center">
                <div className="profile-info">
                  <div>
                    <img
                      className="img-responsive"
                      src="https://pbs.twimg.com/profile_images/910579937089859584/rbsL-1ze_400x400.jpg"
                    />
                  </div>
                  <h2 className="hvr-underline-from-center">
                    Dr.Hamed Ghazali<span>Principle</span>
                  </h2>
                  <div>
                    A hafiz and has a Ph.D. in education. He is the Chairman of the MAS Council of Islamic Schools, a professor at Islamic American University, and the former vice-president of ISNA. He has over 20 years of experience as a principal, superintendent, and imam. He consults for schools around the country and publishes and speaks about Islamic education.
                  </div>
                  <a href="mailto:"><i className="fa fa-envelope-o fa-2x" /></a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="profile-card text-center">
                <div className="profile-info">
                  <div>
                    <img
                      className="img-responsive"
                      src="https://pbs.twimg.com/profile_images/910579937089859584/rbsL-1ze_400x400.jpg"
                    />
                  </div>
                  <h2 className="hvr-underline-from-center">
                    Shamima Khalid<span>Asisstant Principle</span>
                  </h2>
                  <div>
                    Masters degree and over 20 years experience in Muslim schools as a principal and teacher
                  </div>
                  <a href="mailto:"><i className="fa fa-envelope-o fa-2x" /></a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="profile-card text-center">
                <div className="profile-info">
                  <div>
                    <img
                      className="img-responsive"
                      src="https://pbs.twimg.com/profile_images/910579937089859584/rbsL-1ze_400x400.jpg"
                    />
                  </div>
                  <h2 className="hvr-underline-from-center">
                    Dr. Main Alqudah<span>Quran Teacher</span>
                  </h2>
                  <div>
                    Attained a certificate of Quranic recitation (Ijazah) and memorization with an uninterrupted chain of correct readers that continues back to Prophet Muhammad (pbuh). He holds a Masters and a Ph.D. in Islamic Studies and is an Assistant Professor in Islamic Studies at American Open University, Islamic American University, and Sharia Academy. Dr. Main is a member of the Permanent FATWA Committee of the Assembly of Muslim Jurists in America (AMJA). He has over 15 years of experience as a teacher and imam.
                  </div>
                  <a href="mailto:"><i className="fa fa-envelope-o fa-2x" /></a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <h1> Meet our Teachers </h1>
        <p>
          Our academic teachers are state certified.
          Most hold advanced degrees.
          They model life-long learning by pursuing additional degrees and attending professional development courses.
          By taking a sincere interest in each student, they inspire academic success and spiritual growth.

        </p>
        <div className="container">
          <div className="row">

            <div className="col-sm">
              <div className="profile-card text-center">
                <div className="profile-info">
                  <div>
                    <img
                      className="img-responsive"
                      src="https://pbs.twimg.com/profile_images/910579937089859584/rbsL-1ze_400x400.jpg"
                    />
                  </div>
                  <h2 className="hvr-underline-from-center">
                    Dr. Maha Alhanbali <span>Middle & High School Math</span>
                  </h2>
                  <div />
                  <a href="mailto:"><i className="fa fa-envelope-o fa-2x" /></a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="profile-card text-center">
                <div className="profile-info">
                  <div>
                    <img
                      className="img-responsive"
                      src="https://pbs.twimg.com/profile_images/910579937089859584/rbsL-1ze_400x400.jpg"
                    />
                  </div>
                  <h2 className="hvr-underline-from-center">
                    Dr. Maha Alhanbali <span>Middle & High School Math</span>
                  </h2>
                  <div />
                  <a href="mailto:"><i className="fa fa-envelope-o fa-2x" /></a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="profile-card text-center">
                <div className="profile-info">
                  <div>
                    <img
                      className="img-responsive"
                      src="https://pbs.twimg.com/profile_images/910579937089859584/rbsL-1ze_400x400.jpg"
                    />
                  </div>
                  <h2 className="hvr-underline-from-center">
                    Sr. Lila Sharfeldin
                    {' '}
                    <span>Middle & High School Science</span>
                  </h2>
                  <div />
                  <a href="mailto:"><i className="fa fa-envelope-o fa-2x" /></a>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <div className="profile-card text-center">
                <div className="profile-info">
                  <div>
                    <img
                      className="img-responsive"
                      src="https://pbs.twimg.com/profile_images/910579937089859584/rbsL-1ze_400x400.jpg"
                    />
                  </div>
                  <h2 className="hvr-underline-from-center">
                    Sr. Noha Abdelaziz
                    <span>Middle School English Language & Social Studies</span>
                  </h2>
                  <div />
                  <a href="mailto:"><i className="fa fa-envelope-o fa-2x" /></a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <style jsx>
          {`
            h1 {
              line-height:40px;
              color: #27408b;
            }

            .container{

            }

            .img-responsive {
                width:100%;

            }



            .profile-card {
            	background-color: #f1f2f2;
              margin-bottom: 100px;


            		}

            .profile-pic {
              border-radius: 50%;
              position: absolute;
              top: -65px;
              left: 0;
              right: 0;
              margin: auto;
              z-index: 1;
              max-width: 100px;
              
            		  transition: all 0.4s;
            				}


            .profile-info {
            		color: black;
            		padding: 25px;
            	    position: relative;
            	    margin-top: 15px;
            				}

            .profile-info h2 {
            	color: black;
                letter-spacing: 4px;
            	  padding-bottom: 12px;
            				}

            .profile-info span {
            	display: block;
                font-size: 12px;
                color: #4CB493;
            	letter-spacing: 2px;
            			}

            .profile-info a {
            	 color: #4CB493;
            		}
            .profile-info i {
            	    padding: 15px 35px 0px 35px;
            		}


            .profile-card:hover .profile-pic {
            	transform: scale(1.1);
            		}

            .profile-card:hover .profile-info hr  {
            	opacity: 1;
            		}




            /* Underline From Center */
            .hvr-underline-from-center {
              display: inline-block;
              vertical-align: middle;
              -webkit-transform: translateZ(0);
              transform: translateZ(0);
              box-shadow: 0 0 1px rgba(0, 0, 0, 0);
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              -moz-osx-font-smoothing: grayscale;
              position: relative;
              overflow: hidden;
            }
            .hvr-underline-from-center:before {
              content: "";
              position: absolute;
              z-index: -1;
              left: 52%;
              right: 52%;
              bottom: 0;
              background: #FFFFFF;
              border-radius: 50%;
              height: 3px;
              -webkit-transition-property: all;
              transition-property: all;
              -webkit-transition-duration: 0.2s;
              transition-duration: 0.2s;
              -webkit-transition-timing-function: ease-out;
              transition-timing-function: ease-out;
            }
            .profile-card:hover .hvr-underline-from-center:before, .profile-card:focus .hvr-underline-from-center:before, .profile-card:active .hvr-underline-from-center:before {
              left: 0;
              right: 0;
              height: 1px;
              background: #CECECE;
              border-radius: 0;
            }







        `}
        </style>

      </div>
    )
  }
}

export default Staff
