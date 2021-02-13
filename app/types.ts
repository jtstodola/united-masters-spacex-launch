export type NavigationParamsList = {
  Home: undefined
  LaunchDetails: { launch: any }
  CreateLaunch: undefined
}

export interface LaunchProps {
  flight_number: number
  mission_name: string
  links: {
    mission_patch_small: string
    flickr_images: Array<string>
  }
  details: string
}