import { Int } from '../../expr';
import { IType } from '../base/itype';
import { DebugInfo } from '../../types';

/** RISC-V RV32I ebreak instruction. */
export class EBREAK extends IType {
  /**
   * Creates a new RISC-V RV32I ebreak instruction.
   *
   * @param debugInfo - Instruction debug information.
   */
  constructor(debugInfo: DebugInfo) {
    super(debugInfo, 'ebreak', 0x73, 0x0, 0x0, 0x0, new Int(debugInfo, '1'));
  }
}
