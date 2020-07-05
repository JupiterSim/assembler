import { Int } from '../../expr';
import { IType } from '../base/itype';
import { DebugInfo } from '../../types';

/** RISC-V RV32I ecall instruction. */
export class ECALL extends IType {
  /**
   * Creates a new RISC-V RV32I ecall instruction.
   *
   * @param debugInfo - Instruction debug information.
   */
  constructor(debugInfo: DebugInfo) {
    super(debugInfo, 'ecall', 0x73, 0x0, 0x0, 0x0, new Int(debugInfo, '0'));
  }
}
