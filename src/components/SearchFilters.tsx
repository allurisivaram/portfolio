import { Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Tooltip } from '@chakra-ui/react'
import {useState} from 'react'

type Props = {
  id?:string,
  orientation?:string,
  minH?:string,
  defaultValue?:number,
  min?:number, 
  max?:number,
  colorScheme?:string,
  onChange?:void,
  onMouseEnter?:void,
  onMouseLeave?:void,
  backgroundColor?: string,
  color?:string,
  fontSize?:string,
  placement?:string,
  isOpen?:boolean,
  label?:string,
  setValue?: () => void,
  sliderValue?:any
}

const SearchFilters = (props: Props) => {

    const [showTooltip, setShowTooltip] = useState<boolean>(true)

  return (
    <Slider
      id={props.id}
      orientation={props.orientation}
      minH={props.minH}
      defaultValue={props.defaultValue}
      min={props.min} 
      max={props.max}
      colorScheme={props.colorScheme}
      onChange={props.setValue}
      // onMouseEnter={() => setShowTooltip(true)}
      // onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg={props.backgroundColor}
        color={props.color}
        fontSize={props.fontSize}
        placement={props.placement}
        isOpen={showTooltip}
        label={props.sliderValue}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  )
}

export default SearchFilters