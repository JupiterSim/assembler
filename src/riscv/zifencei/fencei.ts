import { Int } from '../../expr';
import { IType } from '../base/itype';
import { DebugInfo } from '../../types';

/** RISC-V RV32Zifencei fence.i instruction. */
export class FENCEI extends IType {
  /**
   * Creates a new RISC-V RV32Zifencei fence.i instruction.
   *
   * @param debugInfo - Instruction debug information.
   */
  constructor(debugInfo: DebugInfo) {
    super(debugInfo, 'fence.i', 0xf, 0, 0x1, 0, new Int(debugInfo, '0'));
  }
}
