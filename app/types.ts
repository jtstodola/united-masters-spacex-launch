export type NavigationParamsList = {
  Home: undefined
  LaunchDetails: { launch: any}
}

export interface LaunchProps {
  mission_name: string
  links: {
    mission_patch_small: string
    flickr_images: Array<string>
  }
  details: string
}