import { expectType } from "tsd";

import PinoPretty, {
  colorizerFactory,
  prettyFactory,
  write
} from "../../";

expectType<PinoPretty.ColorizerFactory>(colorizerFactory)
expectType<PinoPretty.PrettyFactory>(prettyFactory)
expectType<PinoPretty.Write>(write)
