module ReCQ (execCommand, JSCommand(..), JSEvent(..)) where

import Data.List
import Prelude

data JSCommand = JSCommand { type :: String }
data JSEvent = JSEvent { type :: String, dataJson :: String, opportunistic :: Boolean }

execCommand :: JSCommand -> JSEvent
execCommand cmd = JSEvent { type: "apa", dataJson: "{}", opportunistic: true }
