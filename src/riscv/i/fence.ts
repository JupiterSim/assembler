import { Int } from '../../expr';
import { IType } from '../base/itype';
import { DebugInfo } from '../../types';

/** RISC-V RV32I fence instruction. */
export class FENCE extends IType {
  /**
   * Creates a new RISC-V RV32I fence instruction.
   *
   * @param debugInfo - Instruction debug information.
   */
  constructor(debugInfo: DebugInfo) {
    super(debugInfo, 'fence', 0xf, 0x0, 0x0, 0x0, new Int(debugInfo, '0'));
  }
}
