import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32F fsqrt.s instruction. */
export class FSQRTS extends RType {
  /**
   * Creates a new RISC-V RV32F fsqrt.s instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number) {
    super(debugInfo, 'fsqrt.s', 0x53, rd, 0x7, rs1, 0, 0x2c);
  }
}
