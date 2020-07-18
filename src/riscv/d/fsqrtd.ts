import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32D fsqrt.d instruction. */
export class FSQRTD extends RType {
  /**
   * Creates a new RISC-V RV32D fsqrt.d instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number) {
    super(debugInfo, 'fsqrt.d', 0x53, rd, 0x7, rs1, 0, 0x2d);
  }
}
