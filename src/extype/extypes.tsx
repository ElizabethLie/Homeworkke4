export interface songDataInterface {
  uri: string;
  album: {
    name: string;
    images: [{ url: string }];
  };
  name: string;
  artists: [{ name: string }];
  isSelected: boolean;
}

export interface selectedInterface {
  uri: string;
}

export interface tokenState {
  value: string;
}
export interface token {
  value: string;
}
export interface songUrisInterface {
  songUris: selectedInterface["uri"][];
  useSelector: boolean;
}

export interface searchInterface {
  setSearchSong: (value: string) => void;
  getSong: () => void;
}

export interface songInterface {
  uri: string;
  url: string;
  name: string;
  class: string;
  image: string;
  title: string;
  album: string;
  artists: string;
  selectState: (uri: string) => void;
  isSelected: boolean;
}
