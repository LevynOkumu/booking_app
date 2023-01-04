import './Header.css'
import {useState} from 'react'
import {faBed, faCab, faCalendar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { DateRange } from 'react-date-range';
import {format} from "date-fns"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom';

function Header({type}){
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [destination,setDestination]=useState(null)
    const [showDate,setShowDate]= useState(false)
    const [Options,setOptions]= useState({
        Adult:1,
        Children:0,
        room:1
    })
    const [openoptions,setOpenOptions]=useState(false)
    const handleOption = (name,operation)=>{
        setOptions((prev)=>{
            return{
                ...prev,
                [name]:operation === "i" ? Options[name]+1:Options[name]-1
            }
        })
        
    }
    const navigate = useNavigate()
    const handleSearch = ()=>{
        navigate("/hotels",{state:{destination,date,Options}})
    }
   return(
    <div className="header">
        <div className={type === "List" ? "headerContainer ListMode" : "headerContainer"}>
        <div className='headerList'>
            <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Bed</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Plane</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faCab} />
            <span>Cab</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
            </div>
        </div>
        { type !=="List" &&
        <>
        <div className='headerLow'>
        <h1 className='headerTitle'> A lifetime of discounts ? It's genius</h1>
        <p className='headerDesc'> Get rewarded for your travels, unlock instant savings of 10% or more with a free Maribooking account</p>
        <button className='headerBtn'>Sign IN</button>
        <button className='headerBtn'>Register</button>
        </div>
        <div className='headerSearch'>
            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed} className='headerIcon'/>
                <input type='text' placeholder="Where are you gonna Stay?" className="headerSearchInput" onChange={(e)=>{setDestination(e.target.value)}}/>
            </div>
            <div className='headerSearchItem' >
                <FontAwesomeIcon icon={faCalendar} className='headerIcon'/>
                <span onClick={()=>{setShowDate(!showDate); setOpenOptions(false)}} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                {showDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                />}
            </div>
            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                <span onClick={()=>{setOpenOptions(!openoptions); setShowDate(!date)}}className='headerSearchText'>{`${Options.Adult} Adults ${Options.Children} Children ${Options.room} rooms`}</span>
                 {openoptions &&<div className='options'>
                    <div className='optionItem'>
                        
                        <span className='optionText'>Adult</span>
                        <div className='optionCounter'>
                        <button className='optionCounterButton' onClick={()=>handleOption("Adult","d")} disabled={Options.Adult<=1}>-</button>
                        <span className='optionCounterNumber'>{`${Options.Adult}`}</span>
                        <button className='optionCounterButton' onClick={()=>handleOption("Adult","i")} disabled={Options.Adult>=10}>+</button>
                        </div>
                    </div>
                    <div className='optionItem'>
                         
                        <span className='optionText'>Chilren</span>
                        <div className='optionCounter'>
                        <button className='optionCounterButton' onClick={()=>handleOption("Children","d")} disabled={Options.Children<=1}>-</button>
                        <span className='optionCounterNumber'>{`${Options.Children}`}</span>
                        <button className='optionCounterButton' onClick={()=>handleOption("Children","i")} disabled={Options.Children>=10}>+</button>
                        </div>
                    </div>
                    <div className='optionItem'>
                        
                        <span className='optionText'>Room</span>
                        <div className='optionCounter'>
                        <button className='optionCounterButton' onClick={()=>handleOption("room","d")} disabled={Options.room<=1}>-</button>
                        <span className='optionCounterNumber'>{`${Options.room}`}</span>
                        <button className='optionCounterButton' onClick={()=>handleOption("room","i")} disabled={Options.room>=10}>+</button>
                        </div>
                    </div>
                 </div>}
            </div>
            <div className='headerSearchItem'>
                <button className='headerBtn' onClick={()=>(handleSearch())}> Search</button>
            </div>
        </div>
        </>}
        </div>
    </div>
   );
}
export default Header;