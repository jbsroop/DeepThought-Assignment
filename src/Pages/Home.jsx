import { useEffect, useState } from "react";
import Data from '../Data/ddugky_project.json';
import { IoInformation } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import img from '../assets/Group 1588.svg'
import { FiPlus } from "react-icons/fi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
function Home() {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open);
    }

    useEffect(() => {
        if (Data && Data.tasks && Data.tasks.length > 0 && Data.tasks[0].assets) {
            setData(Data.tasks[0].assets);
        } else {
            console.error("Data structure is not as expected", Data);
        }
    }, []);

    return (
        <div className="home">
            <div className="first">
                <p>Technical Project Management</p>
                <button>Submit task</button>
            </div>
            <div className="second">
                <h3>Explore the world of management</h3>
                <p>As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling, and completion. How? Do you want to manage each and every step of your life?</p>
            </div>
            <div className={`left__sidebar ${open ? 'active' : ''}`}>
                <div className="sidebar_title">
                    <p>Journey Board</p>
                    {
                        open ?
                            <IoArrowBack color="#000" onClick={handleOpen} size={12} className="arrow" /> :
                            <IoArrowForward color="#000" onClick={handleOpen} size={12} className="arrow" />
                    }
                </div>
                <div className="sidebar_content">
                    <h3>Explore the world of management</h3>
                    <ul className="sidebar_content__items">
                        <li>1.{data[0].asset_title}</li>
                        <li>2.{data[1].asset_title}</li>
                        <li>3.{data[2].asset_title}</li>
                        <li>4.{data[3].asset_title}</li>
                    </ul>
                    <div className={`number ${open ? 'active' : ''}`}>
                        <p>1</p>
                    </div>
                </div>
            </div>

            <div className="right_sidebar">
                <div className="left">
                    <RxCross1 size={24} />
                    <p>Notice Board</p>
                </div>
                <div className="right"></div>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="card__title"><p>{data[0].asset_title}</p>
                        <span><IoInformation color="#000" /></span>
                    </div>
                    <div className="card__desc">
                        <p><span className="desc_head">Description:</span> {data[0].asset_description}</p>
                    </div>
                    <div className="card_vedio">
                        <iframe
                            src={data[0].asset_content}>
                        </iframe>
                    </div>
                </div>
                <div className="card">
                    <div className="card__title"><p>{data[1].asset_title}</p>
                        <span><IoInformation color="#000" /></span>
                    </div>

                    <div className="card__desc">
                        <p><span className="desc_head">Description:</span> {data[1].asset_description}</p>
                    </div>


                    <div className="card_content">
                        <div className="f">
                            <IoIosArrowUp className="arrow" />
                            <p>Thread A</p>
                        </div>
                        <div className="threads">
                            <div className="sub-thread">
                                <p>Sub thread 1</p>
                                <textarea type="text" placeholder="Enter Text here"></textarea>
                            </div>
                            <div className="sub-thread">
                                <p>Sub Interpretation 1</p>
                                <textarea type="text" placeholder="Enter Text here"></textarea>
                            </div>
                        </div>

                        <div className="icons">
                            <img src={img} alt="Icons" />
                            <div className="Thread-dropdowns">
                                <select name="Select Categ" id="Select Categ">
                                    <option value="Select Categ">Select Categ</option>
                                </select>
                                <select name="Select Proces" id="Select Proces">
                                    <option value="Select Proces">Select Proces</option>
                                </select>
                            </div>
                        </div>

                        <div className="sub-thread-btn">
                            <button><FiPlus size={20} /> Sub-thread</button>
                        </div>
                        <div className="sub-thread3">
                            <p>Summary for Thread A</p>
                            <textarea type="text" placeholder="Enter Text here"></textarea>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__title"><p>{data[2].asset_title}</p>
                        <span><IoInformation color="#000" /></span>
                    </div>

                    <div className="card__desc">
                        <p><span className="desc_head">Description:</span> {data[2].asset_description}</p>
                    </div>
                    <div className="card-content">
                        <p className="card_head">Title</p>
                        <input type="text" className="card_input" />
                    </div>
                    <div className="content">
                        <p className="content_title">Content</p>
                        <div className="content_box">
                            <div className="content_nav">
                                <ul>
                                    <li>File</li>
                                    <li>Edit</li>
                                    <li>View</li>
                                    <li>Insert</li>
                                    <li>Format</li>
                                    <li>Tools</li>
                                    <li>Table</li>
                                    <li>Help</li>
                                </ul>
                                <div className="sec">
                                    <BsArrow90DegLeft />
                                    <BsArrow90DegRight />
                                    <BsArrowsFullscreen />
                                    <p className="para">paragraph</p>
                                    <HiDotsHorizontal />
                                </div>
                            </div>
                            <div className="content_desc"></div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__title"><p>{data[3].asset_title}</p>
                        <span><IoInformation color="#000" /></span>
                    </div>

                    <div className="card__desc">
                        <p><span className="desc_head">Description:</span> {data[3].asset_description}</p>
                    </div>
                    <div className="card_contentf">
                        <div className="one">
                            <div className="f">
                                <IoIosArrowUp className="arrow" />
                                <p>Introduction</p>
                            </div>
                            <div className="one_content">
                                <p className="one_content_para">The 4SA Method , How to Bring a idea into process?</p>
                                <p className="seemore_text">See more</p>
                            </div>
                        </div>
                        <div className="two">
                            <div className="f">
                                <IoIosArrowUp className="arrow" />
                                <p>Thread A</p>
                            </div>
                            <div className="two_content">
                                <p className="two_content_para">How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                                <p className="seemore_text">See more</p>
                            </div>
                        </div>

                        <div className="example">
                            Example 1
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
