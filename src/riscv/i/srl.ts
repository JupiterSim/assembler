import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32I srl instruction. */
export class SRL extends RType {
  /**
   * Creates a new RISC-V RV32I srl instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   * @param rs2       - Source register 2.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, rs2: number) {
    super(debugInfo, 'srl', 0x33, rd, 0x5, rs1, rs2, 0x0);
  }
}
