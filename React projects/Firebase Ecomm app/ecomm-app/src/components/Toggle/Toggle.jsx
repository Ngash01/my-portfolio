import "./Toggle.css";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const Toggle = () => {
  return (
    <div className="toggle">
      <DarkModeIcon/>
      <WbSunnyOutlinedIcon/>
    </div>
  )
}
